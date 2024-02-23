DROP DATABASE IF EXISTS pern;

CREATE DATABASE pern;

-- USE pern;
\c pern;

DROP TABLE IF EXISTS lorems;

CREATE TABLE lorems (
  id SERIAL PRIMARY KEY,
  val VARCHAR (255)
);

INSERT INTO lorems (val)
VALUES
  ('Curabitur tincidunt nulla nec ligula ornare semper.'),
  ('Sed efficitur eros non orci suscipit ullamcorper.'),
  ('Integer et orci ac ex feugiat feugiat at a ipsum.'),
  ('Mauris mattis massa a fermentum ultricies.'),
  ('Aliquam nec mauris ac nisl convallis aliquet.'),
  ('Nam ut purus in dolor luctus suscipit.'),
  ('Nam egestas urna ac felis accumsan porta.'),
  ('Aenean luctus nibh vitae nisl pellentesque volutpat.'),
  ('Integer elementum nisl sit amet quam vestibulum sollicitudin.'),
  ('Duis sed ipsum ut risus feugiat iaculis eu eu erat.')