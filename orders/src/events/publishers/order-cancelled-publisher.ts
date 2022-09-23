import { Subjects, Publisher, OrderCancelledEvent } from "@aaticketss/common";

export class OrderCancelledPublisher extends Publisher<OrderCancelledEvent> {
  subject: Subjects.OrderCancelled = Subjects.OrderCancelled;
}
