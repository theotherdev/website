#!/bin/bash

# Zone.Identifier Cleaner
# Safely removes all *Zone.Identifier files in specified directory and subdirectories

TARGET_DIR="${1:-.}"  # Use current directory if no argument specified

# Verify directory exists
if [ ! -d "$TARGET_DIR" ]; then
    echo "Error: Directory '$TARGET_DIR' does not exist" >&2
    exit 1
fi

# First show what would be deleted (dry run)
echo "=== DRY RUN === Found Zone.Identifier files:"
find "$TARGET_DIR" -type f -name '*Zone.Identifier' -print
find "$TARGET_DIR" -type f -name '*Zone.Identifier' -delete

# Confirm before actual deletion
# read -p "=== WARNING === Delete these files? [y/N] " confirm
# if [[ "$confirm" =~ ^[Yy]$ ]]; then
#     echo "=== DELETING ==="
#     find "$TARGET_DIR" -type f -name '*Zone.Identifier' -delete
#     echo "Cleaning complete"
# else
#     echo "Cancelled by user"
# fi