# Steem Clone 静态网站部署指南

## 📋 部署步骤

### 1. 准备静态文件
```bash
# 构建静态文件（已完成）
pnpm build

# 静态文件位置：./out/
```

### 2. 安装nginx（如果未安装）
```bash
# Ubuntu/Debian
sudo apt update
sudo apt install nginx

# CentOS/RHEL
sudo yum install nginx
# 或
sudo dnf install nginx
```

### 3. 创建web目录
```bash
sudo mkdir -p /var/www/steem-clone
```

### 4. 复制静态文件
```bash
sudo cp -r out/* /var/www/steem-clone/
sudo chown -R www-data:www-data /var/www/steem-clone
sudo chmod -R 755 /var/www/steem-clone
```

### 5. 配置nginx
```bash
# 复制配置文件
sudo cp nginx.conf /etc/nginx/sites-available/steem-clone

# 启用站点
sudo ln -s /etc/nginx/sites-available/steem-clone /etc/nginx/sites-enabled/

# 测试配置
sudo nginx -t

# 重启nginx
sudo systemctl reload nginx
```

### 6. 修改域名配置
编辑 `/etc/nginx/sites-available/steem-clone` 文件：
```nginx
server_name your-domain.com www.your-domain.com;  # 改为你的域名
```

## 🔧 配置说明

### nginx.conf 主要配置：
- **根目录**: `/var/www/steem-clone/out`
- **压缩**: 启用gzip压缩
- **缓存**: 静态资源1年，HTML文件1小时
- **安全头**: 添加安全相关HTTP头
- **路由**: 支持Next.js路由

### 文件结构：
```
/var/www/steem-clone/
├── index.html          # 首页
├── about/              # 关于页面
├── brand/              # 品牌页面
├── contact/            # 联系页面
├── developers/         # 开发者页面
├── entrepreneurs/      # 企业家页面
├── faq/               # FAQ页面
├── social-users/       # 社交用户页面
├── _next/             # Next.js静态资源
└── images/            # 图片资源
```

## 🚀 快速部署命令

```bash
# 一键部署（需要sudo权限）
sudo mkdir -p /var/www/steem-clone
sudo cp -r out/* /var/www/steem-clone/
sudo chown -R www-data:www-data /var/www/steem-clone
sudo chmod -R 755 /var/www/steem-clone
sudo cp nginx.conf /etc/nginx/sites-available/steem-clone
sudo ln -sf /etc/nginx/sites-available/steem-clone /etc/nginx/sites-enabled/
sudo nginx -t && sudo systemctl reload nginx
```

## 🔍 验证部署

1. **检查nginx状态**:
   ```bash
   sudo systemctl status nginx
   ```

2. **查看访问日志**:
   ```bash
   sudo tail -f /var/log/nginx/steem-clone.access.log
   ```

3. **测试网站**:
   ```bash
   curl -I http://localhost
   ```

## 📊 性能优化

- ✅ **Gzip压缩**: 减少传输大小
- ✅ **静态资源缓存**: 1年缓存
- ✅ **HTML缓存**: 1小时缓存
- ✅ **安全头**: 增强安全性
- ✅ **静态文件**: 无需服务器端处理

## 🛠️ 故障排除

### 常见问题：
1. **403 Forbidden**: 检查文件权限
2. **404 Not Found**: 检查文件路径
3. **500 Error**: 检查nginx配置语法

### 调试命令：
```bash
# 检查nginx配置
sudo nginx -t

# 查看错误日志
sudo tail -f /var/log/nginx/error.log

# 检查文件权限
ls -la /var/www/steem-clone/
```
