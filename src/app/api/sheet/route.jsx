import { NextResponse } from 'next/server';

export async function GET(request) {
 
 const url = new URL(request.url);
 const category = url.searchParams.get('category');
 console.log(category)
  try {
    const response = await fetch(`https://script.google.com/macros/s/AKfycbz4mADesDHal8jWA3SIXEH5QVO62TjuY2jSMp2kl_T3_rZqhmAw1ujqrXRMIj5SPsn53Q/exec?category=${category}`);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    return NextResponse.json(data, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
