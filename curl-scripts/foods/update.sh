curl "http://localhost:4741/foods/${ID}" \
--include \
--request PATCH \
--header "Authorization: Bearer ${TOKEN}" \
--header "Content-Type: application/json" \
--data '{
  "food": {
    "name": "'"${NAME}"'",
    "altOption": "'"${ALTOPTION}"'",
    "location": "'"${LOCATION}"'",
    "category": "'"${CATEGORY}"'"
  }
}'

echo
