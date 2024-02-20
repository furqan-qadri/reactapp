import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Testing() {
  const [membersData, setMembersData] = useState(null);
  const bearerToken = 'eyJhbGciOiJIUzUxMiJ9.eyJpc3MiOiJhYWlfYmVfc3RhZ2luZyIsImlhdCI6MTcwODM2MDkxNywianRpIjoiMWFlMzg2OWUtOWFmNS00MGU1LWE1MWUtOTUyMmVlYjViZDEyIiwic3ViIjoicW1uWTFuRDUiLCJvcmdhbml6YXRpb24iOiJSS3pQSllsNyIsInVzZXIiOnsiaWQiOiJxbW5ZMW5ENSIsImVtYWlsIjoiamFtZXNAZXhhbXBsZS5jb20ifX0.OEfQNR7_V0VUGhKh-IZOcIbU6Q25FzhJRL9qbCIXW509V-9O6lr4cooYbQvY4oWaZLGR9sIb7HmjHYspqM-SLA'; // Replace with your actual bearer token

  useEffect(() => {
    const headers = {
      'Authorization': `Bearer ${bearerToken}`,
    };
    axios.get('https://advisoryai-be.staging.advisoryai.com/api/v1/users/organization/members', { headers })
      .then(response => {
        setMembersData(response.data);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);

  return (
    <div>
      {membersData && (
        <div>
          <h1>Members</h1>
          <ul>
            {membersData.members.map(member => (
              <li key={member.id}>
                <p>ID: {member.id}</p>
                <p>First Name: {member.first_name}</p>
                <p>Last Name: {member.last_name}</p>
                <p>Role: {member.role}</p>
                <p>Member ID: {member.member_id}</p>
              </li>
            ))}
          </ul>
          <div>
            <p>Current Page: {membersData.meta.current_page}</p>
            <p>Next Page: {membersData.meta.next_page}</p>
            <p>Previous Page: {membersData.meta.prev_page}</p>
            <p>Total Pages: {membersData.meta.total_pages}</p>
            <p>Total Count: {membersData.meta.total_count}</p>
          </div>
        </div>
      )}
      {!membersData && <p>Loading...</p>}
    </div>
  );
}

export default Testing;
