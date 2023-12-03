import { SubmittedData } from '../interface/interface';
import getImageFormat from '../utils/getFormat';

function Tile(props: { arr: SubmittedData }) {
  const { arr } = props;
  return (
    <div className="tiles">
      {arr.map((item, index) => (
        <ul
          key={item.lastname}
          className={index === 0 ? 'tile active' : 'tile'}
        >
          <li>
            Name:{' '}
            <span>
              {item.firstname} {item.lastname}
            </span>
          </li>
          <li>
            Age: <span>{item.age}</span>
          </li>
          <li>
            Country: <span>{item.country}</span>
          </li>
          <li>
            Email: <span>{item.email}</span>
          </li>
          <li>
            Gender: <span>{item.gender}</span>
          </li>
          <li>
            Password:{' '}
            <span>
              {item.password.substring(0, 4)}
              ****
            </span>
          </li>
          <li>
            Your photo:{' '}
            <img
              width={100}
              height={100}
              src={`data:image/${getImageFormat(item.image)};base64,${
                item.image
              }`}
              alt="Preview"
            />
          </li>
        </ul>
      ))}
    </div>
  );
}

export default Tile;
