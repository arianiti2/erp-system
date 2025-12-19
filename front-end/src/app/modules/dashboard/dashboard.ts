import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.html',
  styleUrls: ['./dashboard.css'],
})
export class Dashboard {
  // Stats for cards
  stats = {
    users: 1200,
    usersChange: 8,
    revenue: 5400,
    revenueChange: 12,
    orders: 320,
    ordersChange: 5,
    visitors: 1800,
    visitorsChange: 15
  };

  // Dummy revenue data for chart
  revenueData: number[] = [50, 80, 120, 90, 150, 200];

  // Dummy user growth data for chart
  userData: number[] = [30, 70, 100, 130, 160, 200];

  // Recent activities list
  recentActivities: { description: string; time: string }[] = [
    { description: 'New user registered', time: '2 min ago' },
    { description: 'Order #1023 placed', time: '15 min ago' },
    { description: 'Revenue hit $5,000', time: '30 min ago' },
    { description: 'User John updated profile', time: '1 hour ago' }
  ];
}
