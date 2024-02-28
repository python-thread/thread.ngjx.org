/* eslint-disable @next/next/no-img-element */
import { ImageResponse } from 'next/og'
import type { NextApiRequest } from 'next'


const baseURL = process.env.NODE_ENV === 'production' ? 'https://thread.ngjx.org' : 'http://localhost:3000'

export const runtime = 'edge'
const Handler = async (req: NextApiRequest) => {
  const { searchParams } = new URL(req.url ?? '')

  const searchTitle = searchParams.has('title') && searchParams.get('title')
  const title = searchTitle && !Array.isArray(searchTitle)
    ? searchTitle?.slice(0, 100)
    : 'Python Thread v1.0.0'

  return new ImageResponse(
    <div
      style={{
        width: '100%',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        textAlign: 'center',
        background: 'black',
        border: '25px solid #252525',
        color: 'white',
      }}
    >
      {/* Logo */}
      <div style={{ display: 'flex', flexDirection: 'row', gap: '2rem', marginTop: '25px', marginLeft: '25px', alignItems: 'center' }}>
        <img src={`${baseURL}/favicon.png`} alt="Python Thread Logo" width="50" height="50" />
        <h3 style={{ fontSize: '2rem', fontWeight: 'bold' }}>Python Thread</h3>
      </div>

      {/* Description */}
      <div style={{ fontSize: '1rem', fontWeight: 'normal', marginLeft: '110px', color: 'gray' }}>
        Your threading solution
      </div>

      {/* Content */}
      <div
        style={{
          display: 'flex',
          width: '100%',
          marginLeft: '25px',
          marginRight: '25px',
          justifyContent: 'center',
          marginTop: '100px',
          fontWeight: 'bold',
          fontSize: '2.5rem',
        }}
      >
        {title}
      </div>
    </div>,
    {
      width: 1200,
      height: 630
    }
  )
}

export default Handler

