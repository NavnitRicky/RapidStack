import { useEffect, useRef, useState } from 'react';

const HeroAnimation = () => {
    const canvasRef = useRef(null);
    const [imagesLoaded, setImagesLoaded] = useState(false);
    const totalFrames = 176;
    const imagesRef = useRef([]);

    useEffect(() => {
        // Preload images
        let loadedCount = 0;
        const images = [];

        for (let i = 1; i <= totalFrames; i++) {
            const img = new Image();
            // Pad with zeros: 1 -> 001, 10 -> 010, 100 -> 100
            const frameNumber = i.toString().padStart(3, '0');
            img.src = `/images/final/ezgif-frame-${frameNumber}.jpg`;
            img.onload = () => {
                loadedCount++;
                if (loadedCount === totalFrames) {
                    setImagesLoaded(true);
                }
            };
            images.push(img);
        }
        imagesRef.current = images;
    }, []);

    useEffect(() => {
        if (!imagesLoaded) return;

        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');
        let frameIndex = 0;
        let animationFrameId;

        const render = () => {
            const img = imagesRef.current[frameIndex];

            // Use CSS logical pixels for calculation (since we scaled the context)
            const width = window.innerWidth;
            const height = window.innerHeight;

            // Calculate scaling to 'cover' the canvas
            const canvasRatio = width / height;
            const imgRatio = img.width / img.height;
            let drawWidth, drawHeight, offsetX, offsetY;

            if (canvasRatio > imgRatio) {
                drawWidth = width;
                drawHeight = width / imgRatio;
                offsetX = 0;
                offsetY = (height - drawHeight) / 2;
            } else {
                drawWidth = height * imgRatio;
                drawHeight = height;
                offsetX = (width - drawWidth) / 2;
                offsetY = 0;
            }

            ctx.clearRect(0, 0, width, height);
            ctx.drawImage(img, offsetX, offsetY, drawWidth, drawHeight);

            frameIndex = (frameIndex + 1) % totalFrames;

            // Control speed (e.g., run at 30fps instead of 60fps if needed)
            // For now, let's run smooth 60fps or native refresh rate
            animationFrameId = requestAnimationFrame(render);
        };

        render();

        return () => cancelAnimationFrame(animationFrameId);
    }, [imagesLoaded]);

    // Handle Resize
    useEffect(() => {
        const handleResize = () => {
            if (canvasRef.current) {
                canvasRef.current.width = window.innerWidth;
                canvasRef.current.height = window.innerHeight;
            }
        };

        window.addEventListener('resize', handleResize);
        handleResize(); // Initial size

        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <canvas
            ref={canvasRef}
            style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                zIndex: 0 // Behind content
            }}
        />
    );
};

export default HeroAnimation;
