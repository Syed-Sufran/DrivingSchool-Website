const ffmpeg = require('ffmpeg-static');
const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

const videoPath = path.join(__dirname, 'enhanced_output.mp4');
const framesDir = path.join(__dirname, 'frames');

// Create or empty the frames directory
if (!fs.existsSync(framesDir)) {
  fs.mkdirSync(framesDir);
} else {
  const files = fs.readdirSync(framesDir);
  for (const file of files) {
    if (file.endsWith('.jpg')) {
      fs.unlinkSync(path.join(framesDir, file));
    }
  }
}

console.log('FFmpeg binary path:', ffmpeg);
console.log('Video path:', videoPath);

try {
  // Extract all frames from the video.
  // Using -q:v 2 to maintain high quality (scale from 1-31, 2 is very high quality).
  // Target format: ezgif-frame-%03d.jpg
  const cmd = `"${ffmpeg}" -i "${videoPath}" -q:v 2 "${path.join(framesDir, 'ezgif-frame-%03d.jpg')}"`;
  console.log('Executing:', cmd);
  execSync(cmd, { stdio: 'inherit' });
  
  // Count how many files were extracted
  const extractedFiles = fs.readdirSync(framesDir).filter(file => file.endsWith('.jpg'));
  console.log(`\nSuccessfully extracted ${extractedFiles.length} frames.`);
  
  // Write a JSON metadata file so the frontend can read the exact number of frames dynamically!
  const metadata = {
    totalFrames: extractedFiles.length
  };
  fs.writeFileSync(path.join(__dirname, 'frames-metadata.json'), JSON.stringify(metadata, null, 2));
  console.log('Saved frames-metadata.json with totalFrames:', metadata.totalFrames);
  
} catch (err) {
  console.error('Error extracting frames:', err);
  process.exit(1);
}
