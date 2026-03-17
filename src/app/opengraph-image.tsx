import { ImageResponse } from 'next/og';

export const runtime = 'edge';
export const alt = 'DevUrWeb — Portfolio de Jonathan Urquiza';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: '#0f172a',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          fontFamily: 'sans-serif',
        }}
      >
        <div
          style={{
            fontSize: 72,
            fontWeight: 'bold',
            color: '#f8fafc',
            letterSpacing: '-2px',
            marginBottom: 16,
          }}
        >
          DevUrWeb
        </div>
        <div
          style={{
            fontSize: 32,
            color: '#94a3b8',
            marginBottom: 40,
          }}
        >
          Jonathan Urquiza — Desarrollador Frontend
        </div>
        <div
          style={{
            display: 'flex',
            gap: 16,
          }}
        >
          {['Next.js', 'React', 'TypeScript'].map((tech) => (
            <div
              key={tech}
              style={{
                background: '#1e293b',
                color: '#38bdf8',
                padding: '8px 20px',
                borderRadius: 8,
                fontSize: 22,
                border: '1px solid #334155',
              }}
            >
              {tech}
            </div>
          ))}
        </div>
      </div>
    ),
    { ...size }
  );
}
