using log4net;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Graduation.Common
{
    public class LogHelper
    {
        private ILog logger;

        public static readonly LogHelper loginfo = LogFactory.GetLogger("loginfo");   //选择<logger name="loginfo">的配置 
        public static readonly LogHelper logerror = LogFactory.GetLogger("logerror");   //选择<logger name="logerror">的配置 


        public static readonly ILog logInfo = LogManager.GetLogger("loginfo");   //选择<logger name="loginfo">的配置 
        public static readonly ILog logError = LogManager.GetLogger("logerror");   //选择<logger name="logerror">的配置 

        public static void SetConfig()
        {
            log4net.Config.XmlConfigurator.Configure();
        }

        public static void SetConfig(FileInfo configFile)
        {
            log4net.Config.XmlConfigurator.Configure(configFile);
        }

        public static void WriteLog(string info)
        {
            if (logInfo.IsInfoEnabled)
            {
                logInfo.Info(info);
            }
        }

        public static void WriteLog(string info, Exception se)
        {
            if (logError.IsErrorEnabled)
            {
                logError.Error(info, se);
            }
        }

        public LogHelper(ILog log)
        {
            this.logger = log;
        }

        public void Info(object message)
        {
            this.logger.Info(message);
        }

        public void Info(object message, Exception e)
        {
            this.logger.Info(message, e);
        }

        public void Debug(object message)
        {
            this.logger.Debug(message);
        }

        public void Debug(object message, Exception e)
        {
            this.logger.Debug(message, e);
        }

        public void Warning(object message)
        {
            this.logger.Warn(message);
        }

        public void Warning(object message, Exception e)
        {
            this.logger.Warn(message, e);
        }

        public void Error(object message)
        {
            this.logger.Error(message);
        }

        public void Error(object message, Exception e)
        {
            this.logger.Error(message, e);
        }

        public void Fatal(object message)
        {
            this.logger.Fatal(message);
        }

        public void Fatal(object message, Exception e)
        {
            this.logger.Fatal(message, e);
        }
    }

    public class LogFactory
    {
        static LogFactory()
        {
        }

        public static LogHelper GetLogger(Type type)
        {
            return new LogHelper(LogManager.GetLogger(type));
        }

        public static LogHelper GetLogger(string str)
        {
            return new LogHelper(LogManager.GetLogger(str));
        }
    }
}
