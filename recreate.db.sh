#!/bin/bash

# Enter the database name that you want to recreate
DB_NAME="messenger"

# Enter the username and password that you will use to access MySQL
DB_USER="root"
DB_PASS="passwd"

# Check if the database already exists
if mysql -u $DB_USER -p$DB_PASS -e "use $DB_NAME" >/dev/null 2>&1; then
    # If the database exists, drop it
    echo "Dropping database $DB_NAME"
    mysql -u $DB_USER -p$DB_PASS -e "drop database $DB_NAME"
fi

# Create the database
echo "Creating database $DB_NAME"
mysql -u $DB_USER -p$DB_PASS -e "create database $DB_NAME"

# Confirm that the database has been created
if mysql -u $DB_USER -p$DB_PASS -e "use $DB_NAME" >/dev/null 2>&1; then
    echo "Database $DB_NAME has been created successfully"
else
    echo "Failed to create database $DB_NAME"
fi
