docker build --no-cache -f SQL\Dockerfile.PostgreSql -t 111/postgre-sql ../SQL

docker build --no-cache -f Dockerfile -t 111/app ../..
