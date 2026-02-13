import { AfterViewInit, Component, ElementRef, OnDestroy, ViewChild } from '@angular/core';
import { Chart } from 'chart.js/auto';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.scss',
})
export class Dashboard implements AfterViewInit, OnDestroy {
  @ViewChild('myChart') private myChartRef!: ElementRef<HTMLCanvasElement>;
  @ViewChild('myBar') private myBarRef!: ElementRef<HTMLCanvasElement>;

  private lineChart?: Chart;
  private barChart?: Chart;

  ngAfterViewInit(): void {
    this.initLineChart();
    this.initBarChart();
  }

  private initLineChart(): void {
    const canvas = this.myChartRef?.nativeElement;
    const ctx = canvas?.getContext('2d');
    if (!canvas || !ctx) {
      return;
    }

    const gradient = ctx.createLinearGradient(0, 0, 0, canvas.height || 200);
    gradient.addColorStop(0, 'rgba(0, 150, 136, 0.9)');
    gradient.addColorStop(1, 'rgba(0, 150, 136, 0.05)');

    this.lineChart = new Chart(ctx, {
      type: 'line',
      data: {
        labels: ['Jan', 'Fev', 'Mar', 'Avr', 'Mai', 'Jun', 'Jui', 'Aout', 'Sept', 'Oct', 'Nov'],
        datasets: [
          {
            label: 'Demandes',
            data: [28, 48, 30, 10, 18, 15, 32, 47, 22, 45, 18],
            borderColor: 'rgba(0, 150, 136, 1)',
            backgroundColor: gradient,
            tension: 0.4,
            fill: true,
            borderWidth: 2,
            pointRadius: 0,
          },
        ],
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: {
            display: false,
          },
          tooltip: {
            enabled: true,
          },
        },
        scales: {
          x: {
            grid: {
              display: false,
            },
            ticks: {
              color: '#6b7280',
            },
          },
          y: {
            grid: {
              color: 'rgba(148, 163, 184, 0.25)',
            },
            ticks: {
              color: '#9ca3af',
              stepSize: 50,
            },
          },
        },
      },
    });
  }

  private initBarChart(): void {
    const canvas = this.myBarRef?.nativeElement;
    const ctx = canvas?.getContext('2d');
    if (!canvas || !ctx) {
      return;
    }

    const categories = ['Fabricants', 'Pharmacies', 'AMMs', 'Essais', 'Grossistes'];

    this.barChart = new Chart(ctx, {
      type: 'bar',
      data: {
        labels: categories,
        datasets: [
          {
            label: 'Taux de demandes',
            data: [200, 300, 120, 200, 220],
            backgroundColor: ['#4f46e5', '#0ea5e9', '#a855f7', '#f59e0b', '#10b981'],
            borderRadius: 0,
            borderSkipped: false,
          },
        ],
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: {
            display: false,
          },
          tooltip: {
            enabled: true,
          },
        },
        scales: {
          x: {
            grid: {
              display: false,
            },
            ticks: {
              color: '#6b7280',
            },
          },
          y: {
            grid: {
              color: 'rgba(148, 163, 184, 0.25)',
            },
            ticks: {
              color: '#9ca3af',
              stepSize: 50,
            },
            suggestedMax: 320,
          },
        },
      },
    });
  }

  ngOnDestroy(): void {
    this.lineChart?.destroy();
    this.barChart?.destroy();
  }
}
