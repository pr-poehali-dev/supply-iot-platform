import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';
import { Switch } from '@/components/ui/switch';
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';

const Index = () => {
  const [isDark, setIsDark] = useState(false);
  const [activeSection, setActiveSection] = useState('dashboard');

  const toggleTheme = () => {
    setIsDark(!isDark);
    document.documentElement.classList.toggle('dark');
  };

  const menuItems = [
    { id: 'dashboard', label: 'Дашборд', icon: 'LayoutDashboard' },
    { id: 'warehouse', label: 'Склад', icon: 'Warehouse' },
    { id: 'sales', label: 'Продажи', icon: 'ShoppingCart' },
    { id: 'shipping', label: 'Отгрузка', icon: 'PackageCheck' },
    { id: 'logistics', label: 'Логистика', icon: 'Truck' },
    { id: 'analytics', label: 'Аналитика', icon: 'LineChart' },
    { id: 'blockchain', label: 'Блокчейн', icon: 'Blocks' },
    { id: 'iot', label: 'IoT', icon: 'Radio' },
    { id: 'settings', label: 'Настройки', icon: 'Settings' },
  ];

  const metrics = [
    { title: 'Товаров на складе', value: '80298', trend: '+12%', icon: 'Package', color: 'text-blue-600' },
    { title: 'Активные заказы', value: '1,453', trend: '+8%', icon: 'ShoppingBag', color: 'text-green-600' },
    { title: 'Транспорт в пути', value: '24', trend: '-3%', icon: 'Truck', color: 'text-orange-600' },
    { title: 'IoT устройства', value: '156', trend: '+2%', icon: 'Cpu', color: 'text-purple-600' },
  ];

  const warehouseData = [
    { name: 'Склад А', fill: 87, capacity: '2400 м³', status: 'active' },
    { name: 'Склад Б', fill: 62, capacity: '1800 м³', status: 'active' },
    { name: 'Склад В', fill: 45, capacity: '3200 м³', status: 'active' },
  ];

  const recentOrders = [
    { id: '#ORD-2847', client: 'ООО "Техносервис"', status: 'processing', amount: '₽ 847,320' },
    { id: '#ORD-2846', client: 'ИП Петров А.В.', status: 'shipped', amount: '₽ 125,400' },
    { id: '#ORD-2845', client: 'ЗАО "МегаСтрой"', status: 'delivered', amount: '₽ 1,245,000' },
  ];

  const iotSensors = [
    { name: 'Температура', value: '+18°C', status: 'normal', icon: 'Thermometer' },
    { name: 'Влажность', value: '45%', status: 'normal', icon: 'Droplets' },
    { name: 'Освещение', value: 'Вкл', status: 'active', icon: 'Lightbulb' },
    { name: 'Безопасность', value: 'OK', status: 'normal', icon: 'Shield' },
  ];

  return (
    <div className="flex min-h-screen bg-background">
      <aside className="w-64 border-r border-border bg-sidebar">
        <div className="p-6 border-b border-sidebar-border">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-primary flex items-center justify-center">
              <Icon name="Blocks" className="text-primary-foreground" size={24} />
            </div>
            <div>
              <h1 className="text-lg font-bold text-sidebar-foreground">СнабИИ</h1>
              <p className="text-xs text-sidebar-foreground/60">Управление складом</p>
            </div>
          </div>
        </div>

        <nav className="p-4 space-y-1">
          {menuItems.map((item) => (
            <button
              key={item.id}
              onClick={() => setActiveSection(item.id)}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-200 ${
                activeSection === item.id
                  ? 'bg-sidebar-accent text-sidebar-accent-foreground font-medium'
                  : 'text-sidebar-foreground hover:bg-sidebar-accent/50'
              }`}
            >
              <Icon name={item.icon} size={20} />
              <span className="text-sm">{item.label}</span>
            </button>
          ))}
        </nav>

        <div className="absolute bottom-6 left-4 right-4">
          <Card className="bg-sidebar-accent border-sidebar-border">
            <CardContent className="p-4">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm text-sidebar-foreground">Темная тема</span>
                <Switch checked={isDark} onCheckedChange={toggleTheme} />
              </div>
              <p className="text-xs text-sidebar-foreground/60">
                Переключение между светлой и темной темой
              </p>
            </CardContent>
          </Card>
        </div>
      </aside>

      <main className="flex-1 overflow-auto">
        <header className="border-b border-border bg-card sticky top-0 z-10">
          <div className="px-8 py-4 flex items-center justify-between">
            <div>
              <h2 className="text-2xl font-bold text-foreground">
                {menuItems.find((item) => item.id === activeSection)?.label || 'Дашборд'}
              </h2>
              <p className="text-sm text-muted-foreground mt-1">
                Добро пожаловать в систему управления складом и логистикой
              </p>
            </div>
            <div className="flex items-center gap-4">
              <Button variant="outline" size="sm">
                <Icon name="Bell" size={16} className="mr-2" />
                Уведомления
              </Button>
              <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-medium">
                АП
              </div>
            </div>
          </div>
        </header>

        <div className="p-8 space-y-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {metrics.map((metric, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-200">
                <CardHeader className="flex flex-row items-center justify-between pb-2">
                  <CardTitle className="text-sm font-medium text-muted-foreground">
                    {metric.title}
                  </CardTitle>
                  <Icon name={metric.icon} className={metric.color} size={20} />
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold text-foreground">{metric.value}</div>
                  <p className="text-xs text-muted-foreground mt-2">
                    <span className={metric.trend.startsWith('+') ? 'text-green-600' : 'text-red-600'}>
                      {metric.trend}
                    </span>{' '}
                    за последнюю неделю
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Icon name="Warehouse" size={20} className="text-primary" />
                  Заполненность складов
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {warehouseData.map((warehouse, index) => (
                  <div key={index}>
                    <div className="flex justify-between mb-2">
                      <span className="text-sm font-medium text-foreground">{warehouse.name}</span>
                      <span className="text-sm text-muted-foreground">{warehouse.fill}%</span>
                    </div>
                    <Progress value={warehouse.fill} className="h-2" />
                    <p className="text-xs text-muted-foreground mt-1">Вместимость: {warehouse.capacity}</p>
                  </div>
                ))}
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Icon name="Radio" size={20} className="text-primary" />
                  IoT мониторинг
                </CardTitle>
              </CardHeader>
              <CardContent className="grid grid-cols-2 gap-4">
                {iotSensors.map((sensor, index) => (
                  <div
                    key={index}
                    className="p-4 rounded-lg bg-muted/50 hover:bg-muted transition-colors duration-200"
                  >
                    <div className="flex items-center gap-2 mb-2">
                      <Icon name={sensor.icon} size={16} className="text-primary" />
                      <span className="text-xs text-muted-foreground">{sensor.name}</span>
                    </div>
                    <div className="text-lg font-bold text-foreground">{sensor.value}</div>
                    <Badge variant="outline" className="mt-2 text-xs">
                      {sensor.status === 'normal' ? '✓ Норма' : '● Активно'}
                    </Badge>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <Card className="lg:col-span-2">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Icon name="ShoppingCart" size={20} className="text-primary" />
                  Последние заказы
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {recentOrders.map((order, index) => (
                    <div
                      key={index}
                      className="flex items-center justify-between p-4 rounded-lg bg-muted/50 hover:bg-muted transition-colors duration-200"
                    >
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                          <Icon name="FileText" className="text-primary" size={20} />
                        </div>
                        <div>
                          <p className="font-medium text-foreground">{order.id}</p>
                          <p className="text-sm text-muted-foreground">{order.client}</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="font-medium text-foreground">{order.amount}</p>
                        <Badge
                          variant={
                            order.status === 'delivered'
                              ? 'default'
                              : order.status === 'shipped'
                              ? 'secondary'
                              : 'outline'
                          }
                          className="mt-1"
                        >
                          {order.status === 'processing'
                            ? 'В обработке'
                            : order.status === 'shipped'
                            ? 'Отправлен'
                            : 'Доставлен'}
                        </Badge>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Icon name="Blocks" size={20} className="text-primary" />
                  Блокчейн
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="p-4 rounded-lg bg-primary/5 border border-primary/20">
                  <div className="flex items-center gap-2 mb-2">
                    <Icon name="CheckCircle2" className="text-green-600" size={16} />
                    <span className="text-xs text-muted-foreground">Последняя транзакция</span>
                  </div>
                  <p className="text-xs font-mono text-foreground break-all">
                    0x7a8f...3c2b
                  </p>
                  <p className="text-xs text-muted-foreground mt-2">2 минуты назад</p>
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Всего блоков</span>
                    <span className="font-medium text-foreground">24,847</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Смарт-контракты</span>
                    <span className="font-medium text-foreground">143</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Валидаторы</span>
                    <span className="font-medium text-foreground">8</span>
                  </div>
                </div>
                <Button className="w-full mt-4" variant="outline">
                  <Icon name="ExternalLink" size={16} className="mr-2" />
                  Открыть обозреватель
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Index;
