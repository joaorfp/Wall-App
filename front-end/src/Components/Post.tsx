import { useNavigate } from 'react-router-dom'
import IMessage from '../interfaces/IMessage'
import { deletePostById } from '../Services/request';

export default function Post({ title, message, isOwner, id }: IMessage) {
  const navigate = useNavigate();
  
  return (
    <div>
      <h4>{`Title: ${title}`}</h4>
      <h5>{`Message: ${message}`}</h5>
      { isOwner ? (
        <div>
          <button
            type='button'
            onClick={ () => {
              navigate(`/wall/${id}`);
            } }
          >
            Edit post
          </button>
          <button
            type='button'
            onClick={ async () => id && await deletePostById(id) }
          >
            Delete
          </button>
        </div>
      ) : null }
    </div>
  )
}
