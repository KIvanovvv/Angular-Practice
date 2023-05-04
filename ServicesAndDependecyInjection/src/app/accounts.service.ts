import { LoggingService } from "./logging.service";
import { Injectable,EventEmitter } from "@angular/core";

@Injectable()

export class AccountsService {
   accounts:{name:string,status:string}[] = [
        {
            name: 'Master Account',
            status: 'active'
        },
        {
            name: 'Testaccount',
            status: 'inactive'
        },
        {
            name: 'Hidden Account',
            status: 'unknown'
        }
    ];
    constructor(private loggingService:LoggingService){}
    updateStatusEvent = new EventEmitter<string>();
    addAccount(name:string, status:string) {
        this.accounts.push({ name: name, status: status });
        this.loggingService.logToConsole(status);
    }
    updateStatus(id:number, status:string) {
        this.accounts[id].status = status;
        this.loggingService.logToConsole(status);
    }
}

export default AccountsService;