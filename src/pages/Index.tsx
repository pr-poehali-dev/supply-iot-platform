import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';
import { Switch } from '@/components/ui/switch';
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { LineChart, Line, AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from 'recharts';
import WarehouseSection from '@/components/WarehouseSection';

const Index = () => {
  const [isDark, setIsDark] = useState(false);
  const [activeSection, setActiveSection] = useState('dashboard');
  const [selectedOrder, setSelectedOrder] = useState<any>(null);

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
    { 
      id: '#ORD-2847', 
      client: 'ООО "Техносервис"', 
      status: 'processing', 
      amount: '₽ 847,320',
      items: 12,
      weight: '2400 кг',
      delivery: '24.10.2025',
      address: 'г. Москва, ул. Промышленная 45',
      contact: '+7 (495) 123-45-67'
    },
    { 
      id: '#ORD-2846', 
      client: 'ИП Петров А.В.', 
      status: 'shipped', 
      amount: '₽ 125,400',
      items: 5,
      weight: '450 кг',
      delivery: '23.10.2025',
      address: 'г. Санкт-Петербург, пр. Невский 120',
      contact: '+7 (812) 987-65-43'
    },
    { 
      id: '#ORD-2845', 
      client: 'ЗАО "МегаСтрой"', 
      status: 'delivered', 
      amount: '₽ 1,245,000',
      items: 28,
      weight: '5600 кг',
      delivery: '22.10.2025',
      address: 'г. Екатеринбург, ул. Ленина 78',
      contact: '+7 (343) 555-22-11'
    },
  ];

  const iotSensors = [
    { name: 'Температура', value: '+18°C', status: 'normal', icon: 'Thermometer' },
    { name: 'Влажность', value: '45%', status: 'normal', icon: 'Droplets' },
    { name: 'Освещение', value: 'Вкл', status: 'active', icon: 'Lightbulb' },
    { name: 'Безопасность', value: 'OK', status: 'normal', icon: 'Shield' },
  ];

  const inventoryChartData = [
    { month: 'Янв', actual: 72000, forecast: 71500, aiPrediction: 73200 },
    { month: 'Фев', actual: 75000, forecast: 74500, aiPrediction: 75800 },
    { month: 'Мар', actual: 78500, forecast: 77000, aiPrediction: 79200 },
    { month: 'Апр', actual: 76000, forecast: 79000, aiPrediction: 77500 },
    { month: 'Май', actual: 80000, forecast: 80500, aiPrediction: 81200 },
    { month: 'Июн', actual: 82500, forecast: 82000, aiPrediction: 83800 },
    { month: 'Июл', actual: null, forecast: 84000, aiPrediction: 85500 },
    { month: 'Авг', actual: null, forecast: 86500, aiPrediction: 87200 },
  ];

  const salesChartData = [
    { week: 'Нед 1', sales: 1200, target: 1100 },
    { week: 'Нед 2', sales: 1350, target: 1200 },
    { week: 'Нед 3', sales: 1150, target: 1300 },
    { week: 'Нед 4', sales: 1453, target: 1400 },
  ];

  const vehicleLocations = [
    { id: 'TRK-001', name: 'КАМАЗ 6520', location: 'Москва → Казань', progress: 65, eta: '2 часа', lat: 55.7558, lng: 37.6173 },
    { id: 'TRK-002', name: 'МАЗ 5440', location: 'СПб → Новгород', progress: 40, eta: '4 часа', lat: 59.9343, lng: 30.3351 },
    { id: 'TRK-003', name: 'Volvo FH', location: 'Екб → Челябинск', progress: 85, eta: '45 минут', lat: 56.8389, lng: 60.6057 },
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
          {activeSection === 'warehouse' ? (
            <WarehouseSection />
          ) : (
          <div>
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
                  <Icon name="LineChart" size={20} className="text-primary" />
                  Прогноз запасов ИИ
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={300}>
                  <AreaChart data={inventoryChartData}>
                    <defs>
                      <linearGradient id="colorActual" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#2563eb" stopOpacity={0.3}/>
                        <stop offset="95%" stopColor="#2563eb" stopOpacity={0}/>
                      </linearGradient>
                      <linearGradient id="colorForecast" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#10b981" stopOpacity={0.3}/>
                        <stop offset="95%" stopColor="#10b981" stopOpacity={0}/>
                      </linearGradient>
                    </defs>
                    <CartesianGrid strokeDasharray="3 3" className="stroke-muted" />
                    <XAxis dataKey="month" className="text-xs" />
                    <YAxis className="text-xs" />
                    <Tooltip contentStyle={{ backgroundColor: 'hsl(var(--card))', border: '1px solid hsl(var(--border))' }} />
                    <Legend />
                    <Area type="monotone" dataKey="actual" stroke="#2563eb" fillOpacity={1} fill="url(#colorActual)" name="Факт" />
                    <Area type="monotone" dataKey="aiPrediction" stroke="#10b981" fillOpacity={1} fill="url(#colorForecast)" strokeDasharray="5 5" name="ИИ Прогноз" />
                  </AreaChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Icon name="TrendingUp" size={20} className="text-primary" />
                  Динамика продаж
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={300}>
                  <LineChart data={salesChartData}>
                    <CartesianGrid strokeDasharray="3 3" className="stroke-muted" />
                    <XAxis dataKey="week" className="text-xs" />
                    <YAxis className="text-xs" />
                    <Tooltip contentStyle={{ backgroundColor: 'hsl(var(--card))', border: '1px solid hsl(var(--border))' }} />
                    <Legend />
                    <Line type="monotone" dataKey="sales" stroke="#2563eb" strokeWidth={3} name="Продажи" dot={{ r: 6 }} />
                    <Line type="monotone" dataKey="target" stroke="#94a3b8" strokeWidth={2} strokeDasharray="5 5" name="План" />
                  </LineChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>
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
                      className="flex items-center justify-between p-4 rounded-lg bg-muted/50 hover:bg-muted transition-colors duration-200 cursor-pointer"
                      onClick={() => setSelectedOrder(order)}
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

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Icon name="MapPin" size={20} className="text-primary" />
                Транспорт в реальном времени
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {vehicleLocations.map((vehicle, index) => (
                  <div key={index} className="p-4 rounded-lg bg-muted/50 border border-border">
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center gap-3">
                        <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                          <Icon name="Truck" className="text-primary" size={20} />
                        </div>
                        <div>
                          <p className="font-medium text-foreground">{vehicle.name}</p>
                          <p className="text-sm text-muted-foreground">{vehicle.id}</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <Badge variant="outline" className="mb-1">
                          <Icon name="Clock" size={12} className="mr-1" />
                          {vehicle.eta}
                        </Badge>
                        <p className="text-xs text-muted-foreground">{vehicle.location}</p>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span className="text-muted-foreground">Прогресс маршрута</span>
                        <span className="font-medium text-foreground">{vehicle.progress}%</span>
                      </div>
                      <Progress value={vehicle.progress} className="h-2" />
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
          </div>
          )}
        </div>
      </main>

      <Dialog open={!!selectedOrder} onOpenChange={() => setSelectedOrder(null)}>
        <DialogContent className="max-w-2xl">
          <DialogHeader>
            <DialogTitle className="flex items-center gap-2">
              <Icon name="FileText" className="text-primary" size={24} />
              Заказ {selectedOrder?.id}
            </DialogTitle>
          </DialogHeader>
          {selectedOrder && (
            <div className="space-y-6">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-1">
                  <p className="text-sm text-muted-foreground">Клиент</p>
                  <p className="font-medium text-foreground">{selectedOrder.client}</p>
                </div>
                <div className="space-y-1">
                  <p className="text-sm text-muted-foreground">Статус</p>
                  <Badge
                    variant={
                      selectedOrder.status === 'delivered'
                        ? 'default'
                        : selectedOrder.status === 'shipped'
                        ? 'secondary'
                        : 'outline'
                    }
                  >
                    {selectedOrder.status === 'processing'
                      ? 'В обработке'
                      : selectedOrder.status === 'shipped'
                      ? 'Отправлен'
                      : 'Доставлен'}
                  </Badge>
                </div>
                <div className="space-y-1">
                  <p className="text-sm text-muted-foreground">Сумма заказа</p>
                  <p className="text-xl font-bold text-primary">{selectedOrder.amount}</p>
                </div>
                <div className="space-y-1">
                  <p className="text-sm text-muted-foreground">Количество позиций</p>
                  <p className="font-medium text-foreground">{selectedOrder.items} шт</p>
                </div>
                <div className="space-y-1">
                  <p className="text-sm text-muted-foreground">Общий вес</p>
                  <p className="font-medium text-foreground">{selectedOrder.weight}</p>
                </div>
                <div className="space-y-1">
                  <p className="text-sm text-muted-foreground">Дата доставки</p>
                  <p className="font-medium text-foreground">{selectedOrder.delivery}</p>
                </div>
              </div>
              
              <div className="space-y-2">
                <p className="text-sm text-muted-foreground">Адрес доставки</p>
                <div className="p-3 rounded-lg bg-muted/50 flex items-center gap-2">
                  <Icon name="MapPin" className="text-primary" size={16} />
                  <p className="text-sm font-medium text-foreground">{selectedOrder.address}</p>
                </div>
              </div>

              <div className="space-y-2">
                <p className="text-sm text-muted-foreground">Контактный телефон</p>
                <div className="p-3 rounded-lg bg-muted/50 flex items-center gap-2">
                  <Icon name="Phone" className="text-primary" size={16} />
                  <p className="text-sm font-medium text-foreground">{selectedOrder.contact}</p>
                </div>
              </div>

              <div className="flex gap-3 pt-4">
                <Button className="flex-1">
                  <Icon name="Truck" size={16} className="mr-2" />
                  Отследить доставку
                </Button>
                <Button variant="outline" className="flex-1">
                  <Icon name="FileText" size={16} className="mr-2" />
                  Скачать документы
                </Button>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Index;