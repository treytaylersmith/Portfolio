export default function Works() {
  return (
    <div>
      <h1>Works</h1>
      <div className="container pt-4">
      <ul className="list-group list-group">
        {users.map((user) => (
          <ListItem key={user.id}>
            <Profile user={user} />
            {/* Link elements are anchors under-the-hood, but they allow the routing behavior to be controlled by the client rather than the server */}
            <Link
              to={`/profile/${user.id}`}
              className="badge bg-primary rounded-pill"
            >
              See More
            </Link>
          </ListItem>
        ))}
      </ul>
    </div>
      
    </div>
    
  );
}
