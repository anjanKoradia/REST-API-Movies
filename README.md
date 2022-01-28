# REST API Server

REST API using node js.

### Create data

```text
HTTP Method - POST

Route - http://localhost:5000/api/movies

Body - Multipart data
```

### Read data

1. Read all data

```text
HTTP Method - GET

Route - http://localhost:5000/api/movies
```

2. Read particular data by id

```text
HTTP Method - GET

Route - http://localhost:5000/api/movies/{movie-id}

Route Example -  http://localhost:5000/api/movies/610ac96ba6e061220c2b031f
```

### Update data

Update particular data using id.

```text
HTTP Method - PUT

Route - http://localhost:5000/api/movies/{movie-id}

Route Example -  http://localhost:5000/api/movies/610ac96ba6e061220c2b031f

Body - Multipart data
```

### Delete data

Delete particular data using id.

```text
HTTP Method - DELETE

Route - http://localhost:5000/api/movies

Route Example -  http://localhost:5000/api/movies/610ac96ba6e061220c2b031f
```
