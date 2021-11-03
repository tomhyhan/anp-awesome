create table systemvariables {
    id INTEGER PRIMARY KEY AUTO_INCREMENT,
    keyname varchar(25),
    thevalue varchar(250)
};

'insert into systemvariables values (purchase_requisition_number, 0)'

DELIMITER $$
CREATE FUNCTION getPurchaseId() RETURNS VARCHAR(15)
    DETERMINISTIC
BEGIN
    DECLARE purchaseId varchar(15);
    UPDATE systemvariables
    SET thevalue = @newvalue := thevalue + 1
    WHERE keyname = 'purchase_requisition_number';

    SELECT CONCAT('S', substring(year(now()),3,2), '_', @newvalue) 
into purchaseId;
RETURN (purchaseId);
END $$
DELIMITER ;

DELIMITER $$
CREATE TRIGGER after_purchase_insert 
    AFTER INSERT ON detail
    FOR EACH ROW 
BEGIN
    UPDATE systemvariables
    SET thevalue = thevalue + 1
    WHERE keyname = 'purchase_requisition_number';
END$$
DELIMITER ;

DELIMITER $$
CREATE TRIGGER after_purchase_delete
    AFTER DELETE ON detail
    FOR EACH ROW 
BEGIN
    UPDATE systemvariables
    SET thevalue = thevalue - 1
    WHERE keyname = 'purchase_requisition_number';
END$$
DELIMITER ;