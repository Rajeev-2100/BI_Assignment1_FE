import { useState } from "react";
import { useParams } from "react-router-dom";
import useFetch from "../useFetch.jsx";

const DetailPage = () => {
  const [titleName, setTitleName] = useState("");

  const { meetupId } = useParams();

  const { data, loading } = useFetch(
    `https://meetup-eta-indol.vercel.app/meetup/Id/${meetupId}`
  );

  console.log(data);

  const meetup = data?.data;

  const matchesTitle = titleName
    .toLowerCase()
    .includes(titleName.toLowerCase());

  if (!matchesTitle) {
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

        <h3 className="text-center mt-4">No matching event found</h3>
      </>
    );
  }

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

      <hr />

      <article className="container d-flex justify-content-between flex-wrap">
        <div>
          <h2>{meetup?.eventTitle}</h2>
          <br />

          <p>
            Hosted By: <br />
            <b>{meetup?.hostedBy}</b>
          </p>

          <img src={meetup?.imageUrl} alt="" width="540" />

          <h5>Details</h5>
          <p>{meetup?.eventDetail}</p>

          <h5>Additional Information: </h5>

          <p>
            <b>Dress code: </b>
            {meetup?.dressCode}
          </p>
          <p>
            <b>Age Restrictions: </b>
            {meetup?.ageRestrictions}
          </p>

          <h4>Event Tags: </h4>
          <button className="btn btn-danger rounded">
            {meetup?.eventTags.join(", ")}
          </button>
        </div>
        <div>
          <div class="card p-2">
            <div class="card-body">
              <p>{meetup?.eventDate}</p>
              <p>{meetup?.eventLocation}</p>
              <p>$ {meetup?.eventPrice}</p>
            </div>
          </div>
          <br />
          <h3>Speakers: ({meetup?.noOfSpeaker})</h3>

          <div className="card p-3">
            <img src={meetup?.imageUrl} alt="" width="400" />
            <h5 className="fw-bold">{meetup?.speakerPerson}</h5>
            <p className="text-muted">{meetup?.speakerRole.join(', ')}</p>
                </div>
        </div>
      </article>
    </>
  );
};
export default DetailPage;
