import { Link } from "react-router-dom";
import { useState } from "react";
import useFetch from "../useFetch.jsx";

const ListingPage = () => {
  const [titleName, setTitleName] = useState("");
  const [meetupType, setMeetupType] = useState("");

  const { data, loading } = useFetch(
    "https://meetup-eta-indol.vercel.app/meetup"
  );

  const formatted = data?.map((event) => ({
    ...event,
    eventDate:
      new Date(event.eventDate).toLocaleString("en-IN", {
        weekday: "short",
        month: "short",
        day: "numeric",
        year: "numeric",
        hour: "2-digit",
        minute: "2-digit",
        hour12: true,
        timeZone: "Asia/Kolkata",
      }),
  }));


  if (loading)
    return (
      <div className="d-flex justify-content-center align-items-center vh-100">
        <p className="fs-4">Loading...</p>
      </div>
    );

  const filteredData = formatted?.filter((meetup) => {
    const matchesTitle = meetup?.eventTitle
      ?.toLowerCase()
      .includes(titleName.toLowerCase());
    const matchesType =
      meetupType === "" || meetup?.eventType[0][0] === meetupType;
    return matchesTitle && matchesType 
  });

  return (
    <>
      <nav className="navbar bg-body-tertiary">
        <div className="container container-fluid">
          <a className="navbar-brand" href="/">
            meetUp
          </a>

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
            <div
              key={meetup._id}
              className="col-12 col-sm-6 col-lg-3 mb-4 d-flex justify-content-center"
            >
              <div className="h-100 card w-100">
                <Link to={`/meetup/Id/${meetup._id}`}>
                  <div className="rounded d-flex justify-content-center flex-column justify-content-lg-start">
                    <button className="rounded position-absolute start-0 top-0">
                      {meetup.eventType}
                    </button>

                    <img
                      src={meetup.imageUrl}
                      className="card-img-top w-100 img-fluid"
                      height="170"
                      alt="event"
                    />
                  </div>
                </Link>

                <div className="card-body text-center text-lg-start">
                  <p className="text-muted mb-1">{meetup.eventDate}</p>
                  <h5 className="card-title fw-bold">{meetup.eventTitle}</h5>
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
