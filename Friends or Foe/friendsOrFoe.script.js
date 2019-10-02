function friend(friends) {
  return friends.filter(word => word.length == 4);
}

friend(["Ryan", "Jimmy", "123", "4", "Cool Man"]);
