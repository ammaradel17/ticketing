import { Publisher, OrderCreatedEvent, Subjects } from "@aaticketss/common";

export class OrderCreatedPublisher extends Publisher<OrderCreatedEvent> {
  subject: Subjects.OrderCreated = Subjects.OrderCreated;
}
