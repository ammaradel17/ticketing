import { Publisher, ExpirationCompleteEvent, Subjects} from '@aaticketss/common'

export class ExpirationCompletePublisher extends Publisher<ExpirationCompleteEvent>{
  subject: ExpirationCompleteEvent['subject'] = Subjects.ExpirationComplete;
}