import {Link, Store} from '../store/model';
import {playSound} from './sound';
import {sendDesktopNotification} from './desktop';
import {sendDiscordMessage, sendDMAsync as sendDiscordDM} from './discord';
import {sendEmail} from './email';
import {sendSlackMessage, sendDMAsync as sendSlackDM} from './slack';
import {DMPayload} from '.';

export function sendNotification(link: Link, store: Store) {
  // Priority
  playSound();
  sendDiscordMessage(link, store);
  sendDesktopNotification(link, store);
  sendEmail(link, store);
  // Non-priority
  sendSlackMessage(link, store);
}

export async function sendDMAsync(service: string, payload: DMPayload) {
  let dmFunction = undefined;
  switch (service) {
    case 'slack':
      dmFunction = sendSlackDM;
      break;
    case 'discord':
      dmFunction = sendDiscordDM;
      break;
    default:
      dmFunction = () => void 0;
  }
  await dmFunction(payload);
}
