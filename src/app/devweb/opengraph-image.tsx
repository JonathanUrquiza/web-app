import { ImageResponse } from 'next/og';

export const runtime = 'edge';
export const alt = 'Proyectos Web — DevUrWeb';
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
            fontSize: 56,
            fontWeight: 'bold',
            color: '#f8fafc',
            marginBottom: 16,
          }}
        >
          Proyectos Web
        </div>
        <div
          style={{
            fontSize: 28,
            color: '#94a3b8',
            marginBottom: 40,
          }}
        >
          Portfolio Frontend de Jonathan Urquiza
        </div>
        <div
          style={{
            fontSize: 24,
            color: '#38bdf8',
            background: '#1e293b',
            padding: '10px 30px',
            borderRadius: 8,
            border: '1px solid #334155',
          }}
        >
          devurweb.website
        </div>
      </div>
    ),
    { ...size }
  );
}
