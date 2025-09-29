#!/bin/bash

# Steem Clone 部署脚本
# 使用方法: ./deploy.sh

set -e

# 配置变量
NGINX_SITES_DIR="/etc/nginx/sites-available"
NGINX_ENABLED_DIR="/etc/nginx/sites-enabled"
WEB_ROOT="/var/www/steem-clone"
SERVICE_NAME="steem-clone"

echo "🚀 开始部署 Steem Clone 静态网站..."

# 1. 检查nginx是否安装
if ! command -v nginx &> /dev/null; then
    echo "❌ nginx 未安装，请先安装 nginx"
    exit 1
fi

# 2. 创建web目录
echo "📁 创建web目录..."
sudo mkdir -p $WEB_ROOT

# 3. 复制静态文件
echo "📋 复制静态文件..."
sudo cp -r out/* $WEB_ROOT/

# 4. 设置权限
echo "🔐 设置文件权限..."
sudo chown -R www-data:www-data $WEB_ROOT
sudo chmod -R 755 $WEB_ROOT

# 5. 复制nginx配置
echo "⚙️ 配置nginx..."
sudo cp nginx.conf $NGINX_SITES_DIR/$SERVICE_NAME

# 6. 启用站点
echo "🔗 启用nginx站点..."
sudo ln -sf $NGINX_SITES_DIR/$SERVICE_NAME $NGINX_ENABLED_DIR/

# 7. 测试nginx配置
echo "🧪 测试nginx配置..."
sudo nginx -t

# 8. 重启nginx
echo "🔄 重启nginx服务..."
sudo systemctl reload nginx

echo "✅ 部署完成！"
echo "🌐 网站应该可以通过 http://your-domain.com 访问"
echo "📝 请记得修改nginx.conf中的域名配置"
echo "📊 查看日志: sudo tail -f /var/log/nginx/steem-clone.access.log"
