class Firebase {
    // *** User API ***
   
    user = uid => this.db.ref(`users/${uid}`);
   
    users = () => this.db.ref('users');
   
    // *** Message API ***
   
    message = uid => this.db.ref(`messages/${uid}`);
   
    messages = () => this.db.ref('messages');
}