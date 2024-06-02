// models/Ticket.js

class Ticket {
  constructor(id, subject, priority, status, creationDate, description, lastUpdate, assignedTo, client, category, notes, isArchived) {
      this.id = id;
      this.subject = subject;
      this.priority = priority;
      this.status = status;
      this.creationDate = creationDate;
      this.description = description;
      this.lastUpdate = lastUpdate;
      this.assignedTo = assignedTo;
      this.client = client;
      this.category = category;
      this.notes = notes;
      this.isArchived = isArchived;
  }
}

export default Ticket;
