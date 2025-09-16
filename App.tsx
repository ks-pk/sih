import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Moon, Sun, User, Shield, Bell, BellOff } from 'lucide-react';
import { Button } from './components/ui/button';
import { Card } from './components/ui/card';
import { Badge } from './components/ui/badge';
import { LoginScreen } from './components/LoginScreen';
import { CitizenDashboard } from './components/CitizenDashboard';
import { AuthorityDashboard } from './components/AuthorityDashboard';
import { LoadingScreen } from './components/LoadingScreen';
import { ToastProvider } from './components/ui/toast';
import { notificationService } from './services/notificationService';

export type UserRole = 'citizen' | 'authority';
export type AppScreen = 'login' | 'roleSelect' | 'citizen' | 'authority';
export type IssueStatus = 'reported' | 'assigned' | 'in-progress' | 'resolved' | 'escalated';
export type UrgencyLevel = 'low' | 'medium' | 'high' | 'critical';
export type IssueCategory = 'pothole' | 'streetlight' | 'garbage' | 'water' | 'traffic' | 'other';

export interface User {
  id: string;
  name: string;
  email: string;
  role: UserRole;
  points: number;
  badges: string[];
  reportsCount: number;
  resolvedCount: number;
  avatar?: string;
}

export interface Issue {
  id: string;
  title: string;
  description: string;
  category: IssueCategory;
  urgency: UrgencyLevel;
  status: IssueStatus;
  location: {
    lat: number;
    lng: number;
    address: string;
  };
  photos: string[];
  reportedBy: string;
  reportedAt: Date;
  assignedTo?: string;
  assignedAt?: Date;
  resolvedAt?: Date;
  resolutionPhoto?: string;
  resolutionNotes?: string;
  escalatedAt?: Date;
  slaDeadline: Date;
  upvotes: number;
  comments: Comment[];
}

export interface Comment {
  id: string;
  userId: string;
  userName: string;
  text: string;
  createdAt: Date;
}

export interface Department {
  id: string;
  name: string;
  categories: IssueCategory[];
  slaHours: number;
}

export interface Badge {
  id: string;
  name: string;
  description: string;
  icon: string;
  requirement: string;
  points: number;
}

export default function App() {
  const [currentScreen, setCurrentScreen] = useState<AppScreen>('login');
  const [currentUser, setCurrentUser] = useState<User | null>(null);
  const [darkMode, setDarkMode] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [loadingProgress, setLoadingProgress] = useState(0);
  const [notificationsEnabled, setNotificationsEnabled] = useState(false);

  useEffect(() => {
    // Initialize app
    const initializeApp = async () => {
      // Simulate app initialization
      const steps = [
        { message: 'Loading application...', progress: 20 },
        { message: 'Checking authentication...', progress: 40 },
        { message: 'Setting up services...', progress: 60 },
        { message: 'Initializing notifications...', progress: 80 },
        { message: 'Ready!', progress: 100 }
      ];

      for (const step of steps) {
        setLoadingProgress(step.progress);
        await new Promise(resolve => setTimeout(resolve, 800));
      }

      // Check for saved theme preference
      const savedTheme = localStorage.getItem('theme');
      if (savedTheme === 'dark' || (!savedTheme && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
        setDarkMode(true);
        document.documentElement.classList.add('dark');
      }

      // Check notification permission
      setNotificationsEnabled(notificationService.getPermissionStatus() === 'granted');

      setIsLoading(false);
    };

    initializeApp();
  }, []);

  const toggleDarkMode = () => {
    const newDarkMode = !darkMode;
    setDarkMode(newDarkMode);
    if (newDarkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  };

  const handleLogin = (user: User) => {
    setCurrentUser(user);
    setCurrentScreen('roleSelect');
    
    // Request notification permission after login
    if (!notificationsEnabled) {
      setTimeout(async () => {
        const result = await notificationService.requestPermission();
        if (result.success) {
          setNotificationsEnabled(true);
          notificationService.sendLocalNotification({
            title: '🔔 Notifications Enabled!',
            body: 'You\'ll now receive updates about your reported issues.'
          });
        }
      }, 2000);
    }
  };

  const toggleNotifications = async () => {
    if (!notificationsEnabled) {
      const result = await notificationService.requestPermission();
      if (result.success) {
        setNotificationsEnabled(true);
        notificationService.sendLocalNotification({
          title: '🔔 Notifications Enabled!',
          body: 'You\'ll now receive updates about your issues.'
        });
      }
    } else {
      setNotificationsEnabled(false);
      // In a real app, you would also unsubscribe from push notifications
    }
  };

  const handleRoleSelect = (role: UserRole) => {
    if (currentUser) {
      setCurrentUser({ ...currentUser, role });
      setCurrentScreen(role);
    }
  };

  const handleLogout = () => {
    setCurrentUser(null);
    setCurrentScreen('login');
  };

  const renderScreen = () => {
    switch (currentScreen) {
      case 'login':
        return <LoginScreen onLogin={handleLogin} />;
      case 'roleSelect':
        return (
          <div className="min-h-screen flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="w-full max-w-md space-y-6"
            >
              <div className="text-center space-y-2">
                <h1 className="text-3xl font-bold">Choose Your Role</h1>
                <p className="text-muted-foreground">
                  Select how you want to use the platform
                </p>
              </div>
              <div className="space-y-4">
                <Card className="p-6 cursor-pointer hover:shadow-lg transition-shadow"
                      onClick={() => handleRoleSelect('citizen')}>
                  <div className="flex items-center space-x-4">
                    <div className="p-3 bg-blue-100 dark:bg-blue-900 rounded-full">
                      <User className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                    </div>
                    <div>
                      <h3 className="font-semibold">Citizen</h3>
                      <p className="text-sm text-muted-foreground">
                        Report issues, track progress, earn points
                      </p>
                    </div>
                  </div>
                </Card>
                <Card className="p-6 cursor-pointer hover:shadow-lg transition-shadow"
                      onClick={() => handleRoleSelect('authority')}>
                  <div className="flex items-center space-x-4">
                    <div className="p-3 bg-green-100 dark:bg-green-900 rounded-full">
                      <Shield className="w-6 h-6 text-green-600 dark:text-green-400" />
                    </div>
                    <div>
                      <h3 className="font-semibold">Authority</h3>
                      <p className="text-sm text-muted-foreground">
                        Manage issues, assign tasks, resolve problems
                      </p>
                    </div>
                  </div>
                </Card>
              </div>
            </motion.div>
          </div>
        );
      case 'citizen':
        return <CitizenDashboard user={currentUser!} onLogout={handleLogout} />;
      case 'authority':
        return <AuthorityDashboard user={currentUser!} onLogout={handleLogout} />;
      default:
        return <LoginScreen onLogin={handleLogin} />;
    }
  };

  if (isLoading) {
    return <LoadingScreen message="Initializing CivicReport..." progress={loadingProgress} />;
  }

  return (
    <ToastProvider>
      <div className={`min-h-screen bg-background text-foreground transition-colors duration-300`}>
        {/* Header */}
        <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm border-b">
        <div className="container mx-auto px-4 py-3 flex items-center justify-between">
          <motion.div 
            className="flex items-center space-x-2"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
          >
            <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-green-500 rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-sm">CR</span>
            </div>
            <span className="font-bold text-xl">CivicReport</span>
          </motion.div>
          
          <div className="flex items-center space-x-2">
            {currentUser && (
              <motion.div 
                className="hidden sm:flex items-center space-x-2 text-sm"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
              >
                <span>Welcome, {currentUser.name}</span>
                {currentUser.role === 'citizen' && (
                  <Badge className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200">
                    {currentUser.points} pts
                  </Badge>
                )}
                {currentUser.badges.includes('verified-citizen') && (
                  <Badge className="bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200">
                    ✓ Verified
                  </Badge>
                )}
              </motion.div>
            )}
            
            {currentUser && (
              <Button
                variant="ghost"
                size="sm"
                onClick={toggleNotifications}
                className="w-9 h-9 p-0 relative"
                title={notificationsEnabled ? 'Notifications enabled' : 'Enable notifications'}
              >
                {notificationsEnabled ? (
                  <Bell className="w-4 h-4 text-green-600" />
                ) : (
                  <BellOff className="w-4 h-4 text-muted-foreground" />
                )}
                {notificationsEnabled && (
                  <div className="absolute -top-1 -right-1 w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                )}
              </Button>
            )}
            
            <Button
              variant="ghost"
              size="sm"
              onClick={toggleDarkMode}
              className="w-9 h-9 p-0"
              title={darkMode ? 'Switch to light mode' : 'Switch to dark mode'}
            >
              {darkMode ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
            </Button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="pt-16">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentScreen}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            {renderScreen()}
          </motion.div>
        </AnimatePresence>
      </main>
    </div>
    </ToastProvider>
  );
}