CREATE TABLE foodie.logs (
    log_id timeuuid,
    log_application text,
    log_application_action text,
    log_type text,
    log_message text,
    log_timestamp timestamp,
    PRIMARY KEY ((log_application, log_type), log_id)
) WITH CLUSTERING ORDER BY (log_id DESC)