const UPDATED_COMIC_UNAVAILABLE_LOAN = `
CREATE TRIGGER updatedcomicunavailableloan AFTER INSERT
ON loan
FOR EACH ROW
BEGIN
	UPDATE comic SET status = 0
    WHERE id = NEW.comic_id;
END
`;

const DROP_UPDATED_COMIC_UNAVAILABLE_LOAN = `
DROP TRIGGER updatedcomicunavailableloan
`;


exports.up = async knex => knex.raw(UPDATED_COMIC_UNAVAILABLE_LOAN);
exports.down = async knex => knex.raw(DROP_UPDATED_COMIC_UNAVAILABLE_LOAN);
