'use client';

import { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import { HexColorPicker } from 'react-colorful';
import { IMAGES } from '@/lib/constants/images';

interface Room {
  id: string;
  name: string;
  base: string;
  mask: string;
}

const rooms: Room[] = [
  { 
    id: 'living-room', 
    name: 'Living Room', 
    base: IMAGES.rooms.livingRoom.base,
    mask: IMAGES.rooms.livingRoom.mask,
  },
  { 
    id: 'bedroom', 
    name: 'Bedroom', 
    base: IMAGES.rooms.bedroom.base,
    mask: IMAGES.rooms.bedroom.mask,
  },
  { 
    id: 'kitchen', 
    name: 'Kitchen', 
    base: IMAGES.rooms.kitchen.base,
    mask: IMAGES.rooms.kitchen.mask,
  },
  { 
    id: 'exterior', 
    name: 'Exterior', 
    base: IMAGES.rooms.exterior.base,
    mask: IMAGES.rooms.exterior.mask,
  },
];

export function ColorVisualizer() {
  const [selectedRoom, setSelectedRoom] = useState<Room>(rooms[0]);
  const [color, setColor] = useState('#FFFFFF');
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    setIsLoading(true);

    // Load base image and mask
    const baseImage = new window.Image();
    const maskImage = new window.Image();
    let baseLoaded = false;
    let maskLoaded = false;

    const tryRender = () => {
      if (!baseLoaded || !maskLoaded) return;

      // Set canvas size to match image
      canvas.width = baseImage.width;
      canvas.height = baseImage.height;

      // Draw base image
      ctx.drawImage(baseImage, 0, 0);

      // Create a temporary canvas for the mask
      const tempCanvas = document.createElement('canvas');
      tempCanvas.width = canvas.width;
      tempCanvas.height = canvas.height;
      const tempCtx = tempCanvas.getContext('2d');
      if (!tempCtx) return;

      // Draw and process mask
      tempCtx.drawImage(maskImage, 0, 0);
      const maskData = tempCtx.getImageData(0, 0, tempCanvas.width, tempCanvas.height);

      // Create colored overlay
      ctx.fillStyle = color;
      ctx.globalCompositeOperation = 'source-atop';
      
      // Apply color only where mask is white
      const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
      for (let i = 0; i < maskData.data.length; i += 4) {
        if (maskData.data[i] > 128) { // If mask pixel is light (wall area)
          const alpha = maskData.data[i] / 255 * 0.5; // Use mask intensity for blend
          imageData.data[i + 3] = Math.round(alpha * 255); // Set alpha
        }
      }
      ctx.putImageData(imageData, 0, 0);

      setIsLoading(false);
    };

    baseImage.onload = () => {
      baseLoaded = true;
      tryRender();
    };

    maskImage.onload = () => {
      maskLoaded = true;
      tryRender();
    };

    baseImage.src = selectedRoom.base;
    maskImage.src = selectedRoom.mask;

  }, [selectedRoom, color]);

  return (
    <div className="bg-white rounded-xl shadow-sm p-6">
      <h2 className="text-2xl font-bold mb-6">Color Visualizer</h2>
      
      {/* Room Selection */}
      <div className="flex gap-4 mb-6 overflow-x-auto pb-2">
        {rooms.map((room) => (
          <button
            key={room.id}
            onClick={() => setSelectedRoom(room)}
            className={`px-4 py-2 rounded-lg whitespace-nowrap ${
              selectedRoom.id === room.id
                ? 'bg-blue-600 text-white'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            {room.name}
          </button>
        ))}
      </div>

      {/* Visualization Area */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Color Picker */}
        <div>
          <h3 className="font-semibold mb-4">Select Color</h3>
          <HexColorPicker color={color} onChange={setColor} />
          <div className="mt-4">
            <label className="text-sm text-gray-600">Color Code</label>
            <input
              type="text"
              value={color}
              onChange={(e) => setColor(e.target.value)}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
        </div>

        {/* Preview */}
        <div className="md:col-span-2">
          <div className="relative aspect-[4/3] rounded-lg overflow-hidden">
            {isLoading && (
              <div className="absolute inset-0 flex items-center justify-center bg-gray-100">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
              </div>
            )}
            <canvas
              ref={canvasRef}
              className="w-full h-full object-cover"
            />
          </div>
          <p className="mt-2 text-sm text-gray-500 text-center">
            * This is a visualization tool. Actual paint colors may vary.
          </p>
        </div>
      </div>
    </div>
  );
} 