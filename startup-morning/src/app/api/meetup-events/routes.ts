export async function GET() {
    try {
      // You'll need to get an API key from Meetup.com
      const MEETUP_API_KEY = process.env.MEETUP_API_KEY;
      
      // Replace with your Perth startup group's urlname
      const GROUP_URLNAME = 'perth-startup-community';
  
      // Fetch upcoming events for the group
      const response = await fetch(
        `https://api.meetup.com/${GROUP_URLNAME}/events?&sign=true&photo-host=public&fields=featured_photo&page=20&status=upcoming`,
        {
          headers: {
            Authorization: `Bearer ${MEETUP_API_KEY}`,
          },
        }
      );
  
      if (!response.ok) {
        throw new Error(`Meetup API error: ${response.status}`);
      }
  
      const data = await response.json();
      return Response.json(data);
    } catch (error) {
      console.error('Error fetching Meetup events:', error);
      return Response.json({ error: 'Failed to fetch Meetup events' }, { status: 500 });
    }
  }