import { Publisher, Subjects, TicketUpdatedEvent } from "@aaticketss/common";

export class TicketUpdatedPublisher extends Publisher<TicketUpdatedEvent>{
  subject: Subjects.TicketUpdated = Subjects.TicketUpdated
}