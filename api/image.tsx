import { ImageResponse } from '@vercel/og';

export const runtime = 'edge';

export default function handler(req: Request) {
  const { searchParams } = new URL(req.url);

  const loc = searchParams.get('loc') || '';
  const time = searchParams.get('time') || '';
  const stat = searchParams.get('stat') || '';

  return new ImageResponse(
    (
      <div
        style={{
          width: '1200px',
          height: '500px',
          position: 'relative',
          backgroundImage: 'url(https://your-domain.vercel.app/base.png)',
          backgroundSize: 'cover',
        }}
      >
        {/* loc */}
        <div style={{
          position: 'absolute',
          top: 50,
          left: 50,
          fontSize: 40,
          color: 'white'
        }}>
          {loc}
        </div>

        {/* time */}
        <div style={{
          position: 'absolute',
          top: 150,
          left: 50,
          fontSize: 40,
          color: 'white'
        }}>
          {time}
        </div>

        {/* stat */}
        <div style={{
          position: 'absolute',
          top: 250,
          left: 50,
          fontSize: 40,
          color: 'white'
        }}>
          {stat}
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 500,
    }
  );
}
