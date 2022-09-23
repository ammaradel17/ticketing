import { Publisher, Subjects, TicketCreatedEvent } from "@aaticketss/common";

export class TicketCreatedPublisher extends Publisher<TicketCreatedEvent> {
  readonly subject:TicketCreatedEvent['subject'] = Subjects.TicketCreated;
}
