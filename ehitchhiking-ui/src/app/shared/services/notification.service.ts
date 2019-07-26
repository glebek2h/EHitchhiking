import {Injectable} from '@angular/core';
import {NotificationComponent} from '@shared/components/notification/notification.component';
import {NotificationTypes} from '@shared/enums/notification.types';
import {MAT_SNACK_HORIZONTAL_POSITION, DEFAULT_MAT_SNACK_CLASS} from '@shared/constants/modal-constants';
import {MatSnackBarConfig, MatSnackBar} from '@angular/material';

@Injectable()
export class NotificationService {
  static readonly notificationDuration = 5000; // in milliseconds
  static readonly notificationClassMap = {
    [NotificationTypes.Success]: 'success',
    [NotificationTypes.Info]: 'info',
    [NotificationTypes.Error]: 'error',
  };

  constructor(private notificationBar: MatSnackBar) {
  }

  showErrorNotification(notificationMessage: string) {
    this.notificationBar.openFromComponent(
      NotificationComponent,
      this.generateNotificationConfig(notificationMessage, NotificationTypes.Error)
    );
  }

  showSuccessNotification(notificationMessage: string) {
    this.notificationBar.openFromComponent(
      NotificationComponent,
      this.generateNotificationConfig(notificationMessage, NotificationTypes.Success)
    );
  }

  showInfoNotification(notificationMessage: string) {
    this.notificationBar.openFromComponent(
      NotificationComponent,
      this.generateNotificationConfig(notificationMessage, NotificationTypes.Info)
    );
  }

  private returnClass(type: NotificationTypes): string {
    return NotificationService.notificationClassMap[type];
  }

  private generateNotificationConfig(
    notificationMessage: string,
    notificationType: NotificationTypes
  ): MatSnackBarConfig<any> {
    const config = new MatSnackBarConfig<any>();
    config.data = {message: notificationMessage, type: notificationType};
    config.duration = NotificationService.notificationDuration;
    config.horizontalPosition = MAT_SNACK_HORIZONTAL_POSITION;
    config.panelClass = [this.returnClass(notificationType), DEFAULT_MAT_SNACK_CLASS];
    return config;
  }
}
