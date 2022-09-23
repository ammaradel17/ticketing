import { Subjects, Publisher, PaymentCreatedEvent } from "@aaticketss/common";

export class PaymentCreatedPublisher extends Publisher<PaymentCreatedEvent> {
  subject: Subjects.PaymentCreated = Subjects.PaymentCreated;
}
