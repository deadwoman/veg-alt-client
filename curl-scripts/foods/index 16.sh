curl "http://localhost:4741/foods" \
  --include \
  --request GET \
  --header "Authorization: Bearer ${TOKEN}" \

echo
