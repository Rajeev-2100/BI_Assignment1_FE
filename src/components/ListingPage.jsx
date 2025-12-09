import { Link } from 'react-router-dom'
import { useState } from "react";
import useFetch from "../useFetch.jsx";

const ListingPage = () => {
  const [titleName, setTitleName] = useState("");
  const [meetupType, setMeetupType] = useState("");

  const { data, loading } = useFetch(
    "https://meetup-eta-indol.vercel.app/meetup"
  );

  console.log("data", data);

  if (loading) return <p>Loading...</p>;

  const filteredData = data?.filter((meetup) => {
    const matchesTitle = meetup?.eventTitle?.toLowerCase().includes(titleName.toLowerCase());
    const matchesType = meetupType === "" || meetup?.eventType[0][0] === meetupType;
    return matchesTitle && matchesType;
  });
  // console.log(filteredData)

  return (
    <>
      <nav className="navbar bg-body-tertiary">
        <div className="container container-fluid">
          <a className="navbar-brand">meetUp</a>

          <input
            className="me-2"
            type="search"
            placeholder="Search by title..."
            onChange={(e) => setTitleName(e.target.value)}
            value={titleName}
          />
        </div>
      </nav>

      <main>
        <hr />

        <article>
          <div className="container-fluid container d-flex flex-wrap justify-content-between mb-4">
            <h2>Meetup Events</h2>

            <select
              value={meetupType}
              className="mb-3"
              onChange={(e) => setMeetupType(e.target.value)}
            >
              <option value="">All</option>
              <option value="Online Event">Online Event</option>
              <option value="Offline Event">Offline Event</option>
            </select>
          </div>
        </article>
 
        <article className="container d-flex justify-content-between flex-wrap gap-2">
          {filteredData?.length === 0 && <h4>No events found</h4>}
          {filteredData?.map((meetup) => (
            <div key={meetup._id} className="col-lg-3 mb-4">
              <div className="h-100 card">
                <Link to={`/meetup/Id/${meetup._id}`}>
                <img
                  src={meetup.imageUrl}
                  className="card-img-top"
                  height="170"
                  style={{ objectFit: "cover" }}
                  alt="event"
                  />
                </Link>

                <div className="card-body">
                  <p className="text-muted mb-1">{meetup.eventDate}</p>
                  <h5 className="card-title fw-bold">
                    {meetup.eventTitle}
                  </h5>
                </div>

                <div className="card-footer bg-white border-0">
                  <button className="btn btn-primary w-100">
                    View Details
                  </button>
                </div>
              </div>
            </div>
          ))}
        </article>
      </main>
    </>
  );
};

export default ListingPage;