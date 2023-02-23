# Back-End

### Installation & Configuration

Open your terminal and navigate to back-end folder:

```bash
$ cd Wall-App/back-end/
```

Create your virtual enviroment:
```bash
$ python3 -m venv env
$ source env/bin/activate
```

Install the dependencies:
```bash
(env)$ pip install -r requirements.txt
```

Create a `.env` file and insert your secret key after installing the pip dependencies:

```env
SECRET_KEY=
```

### Usage

Now you should migrate the files and run the server
```bash
(env)$ python3 manage.py migrate
(env)$ python3 manage.py runserver
```

The project must have back-end and front-end running at the same time. Look at the README.md of the front-end file for more instructions

### Navigation

Navigate to `http://127.0.0.1:8000/admin`, `http://127.0.0.1:8000/` or `http://127.0.0.1:8000/wall`.

### Tests

To run the tests, run the following command on the root folder:
```bash
(env)$ python3 manage.py test
```


