CREATE TABLE person
(
    id              UUID NOT NULL PRIMARY KEY,
    family_name     VARCHAR(127) NOT NUll,
    given_name     VARCHAR(127) NOT NUll,
    nick_name     VARCHAR(127)
);
CREATE INDEX person_family_name_idx ON person(family_name);
CREATE INDEX person_given_name_idx ON person(given_name);
CREATE INDEX person_nick_name_idx ON person(nick_name);

