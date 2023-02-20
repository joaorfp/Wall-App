import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { updatePostById } from '../Services/request';

interface FormElements extends HTMLFormControlsCollection {
  title: HTMLInputElement;
  message: HTMLInputElement;
}

interface RegisterForm extends HTMLFormElement {
  readonly elements: FormElements;
}

export default function EditPost() {
  const { id } = useParams();
  const navigate = useNavigate();

  const editPost = async (event: React.FormEvent<RegisterForm>) => {
    event.preventDefault();
    const {
      title,
      message,
    } = event?.currentTarget?.elements;

    id && await updatePostById(title.value, message.value, +id);
    navigate('/wall');
  }

  return (
    <div>
      <div>
        <form onSubmit={ editPost }>
          <label htmlFor="title">
            <input
              type="text"
              placeholder="Type the title for your post"
              name="title"
              id="title"
              required
            />
          </label>
          <label htmlFor="message">
            <input
              type="text"
              placeholder="Type your message"
              name="message"
              id="message"
              required
            />
          </label>
          <button
            type='submit'
          >
            Edit Message
          </button>
        </form>
      </div>
    </div>
  )
}
