# Backend


### Model
I used the following models:
```
+------------+  +------------+
| Country    |  | Vote       |
+------------+  +------------+
| id         |  | id         |
| cca3       |  | name       |
| name       |  | email      |
| capital    |  | country_id |
| region     |  +------------+
| subregion  |
+------------+

```
I decided it to keep it simple because I assumed that there is no more development in the future, maybe in a different scenario I could take in consideration a User model or something else.

### Rake taks
I decided to use a rake task:
```
bin/rake countries:sync
```
That populates the Country table.

This is because the country count is ~250, a small number so its better to have it in the database instead od calling the external API in every request

### Endpoints

Only 2 endpoints:
```
GET countries
POST votes
```
At the moment `GET countries` returns all the countries so the front can filter them, this is again, because the small amount of countries