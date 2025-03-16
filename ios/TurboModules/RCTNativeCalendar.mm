//
//  RCTCalendar.m
//  ProductsApp
//
//  Created by Caio de Oliveira Reis on 15/03/25.
//

#import "RCTNativeCalendar.h"
#import <EventKit/EventKit.h>

@implementation RCTNativeCalendar

RCT_EXPORT_MODULE(NativeCalendar)

- (void)setReminder:(double)timestamp message:(NSString *)message {
    NSDate *date = [NSDate dateWithTimeIntervalSince1970:(timestamp / 1000)];
    EKEventStore *eventStore = [[EKEventStore alloc] init];

    // Request access to the calendar
    [eventStore requestAccessToEntityType:EKEntityTypeEvent completion:^(BOOL granted, NSError *error) {
        if (granted) {
            // Create a new event
            EKEvent *event = [EKEvent eventWithEventStore:eventStore];
            event.title = message;
            event.startDate = date;
            event.endDate = [date dateByAddingTimeInterval:60 * 60]; // 1 hour duration
            event.calendar = [eventStore defaultCalendarForNewEvents];

            NSError *eventError = nil;
            [eventStore saveEvent:event span:EKSpanThisEvent commit:YES error:&eventError];

            if (eventError) {
                NSLog(@"Error saving event: %@", eventError.localizedDescription);
            } else {
                NSLog(@"Event saved successfully");
            }
        } else {
            NSLog(@"Access to calendar not granted");
        }
    }];
}

- (std::shared_ptr<facebook::react::TurboModule>)getTurboModule:(const facebook::react::ObjCTurboModule::InitParams &)params {
  return std::make_shared<facebook::react::NativeCalendarSpecJSI>(params);
}

@end
