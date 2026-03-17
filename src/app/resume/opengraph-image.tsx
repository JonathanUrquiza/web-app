import { ImageResponse } from 'next/og';

export const runtime = 'edge';
export const alt = 'Currículum — Jonathan Javier Urquiza';
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
            marginBottom: 12,
          }}
        >
          Jonathan Javier Urquiza
        </div>
        <div
          style={{
            fontSize: 30,
            color: '#38bdf8',
            marginBottom: 32,
          }}
        >
          Desarrollador Web Frontend
        </div>
        <div
          style={{
            fontSize: 22,
            color: '#94a3b8',
            marginBottom: 40,
          }}
        >
          Buenos Aires, Argentina
        </div>
        <div
          style={{
            display: 'flex',
            gap: 16,
          }}
        >
          {['LinkedIn', 'GitHub', 'DevUrWeb'].map((label) => (
            <div
              key={label}
              style={{
                background: '#1e293b',
                color: '#e2e8f0',
                padding: '8px 20px',
                borderRadius: 8,
                fontSize: 20,
                border: '1px solid #334155',
              }}
            >
              {label}
            </div>
          ))}
        </div>
      </div>
    ),
    { ...size }
  );
}
