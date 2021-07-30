// This URL can be combined with a photo id to fetch a photo.
function getPhotoFromId(photoId) {
  return `https://picsum.photos/id/${photoId}/200/200`;
}
// This URL can be used to get an array of objects that contain information
// about various photos.
const PHOTO_LIST_URL = "https://picsum.photos/list";

const App = (props) => {
  // 1. Set up React.useState in order to create a variable that will be used to include an array of photos and a method to "setPhotos"
  let [photos, setPhotos] = React.useState()
  // 2. Declare a React.useEffect life cycle method
  // This life cycle method:
  // - will be called after the component is initially rendered
  // - will fetch an array of photos
  // - will set that array of photos to state once received
  React.useEffect(() => {
    fetch(PHOTO_LIST_URL)
      .then(res => res.json())
      .then(data => setPhotos(data))
  }, [])

  return (
    <React.Fragment>
      <header>
        <p>Photo Wall</p>
      </header>
      <div className="collage">
        {photos && photos.map((photo) => (
          <div>
            <img
              alt={photo.filename}
              key={photo.id}
              src={getPhotoFromId(photo.id)}
            />
            <p>
              <span>{photo.filename}</span><br/>
              <br />
              #{photo.id}<br/>
              {getPhotoFromId(photo.id)}<br/>
            </p>
          </div>
        ))}
      </div>
    </React.Fragment>
  );
};